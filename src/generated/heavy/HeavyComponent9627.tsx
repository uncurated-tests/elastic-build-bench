'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9627<T> = T extends (infer U)[]
  ? DeepReadonlyArray9627<U>
  : T extends object
  ? DeepReadonlyObject9627<T>
  : T;

interface DeepReadonlyArray9627<T> extends ReadonlyArray<DeepReadonly9627<T>> {}

type DeepReadonlyObject9627<T> = {
  readonly [P in keyof T]: DeepReadonly9627<T[P]>;
};

type UnionToIntersection9627<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9627<T> = UnionToIntersection9627<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9627<T extends unknown[], V> = [...T, V];

type TuplifyUnion9627<T, L = LastOf9627<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9627<TuplifyUnion9627<Exclude<T, L>>, L>;

type DeepPartial9627<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9627<T[P]> }
  : T;

type Paths9627<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9627<K, Paths9627<T[K], Prev9627[D]>> : never }[keyof T]
  : never;

type Prev9627 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9627<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9627 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths9627 = Paths9627<NestedConfig9627>;

interface HeavyProps9627 {
  config: DeepPartial9627<NestedConfig9627>;
  path?: ConfigPaths9627;
}

const HeavyComponent9627 = memo(function HeavyComponent9627({ config }: HeavyProps9627) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9627) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9627 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9627: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9627.displayName = 'HeavyComponent9627';
export default HeavyComponent9627;
