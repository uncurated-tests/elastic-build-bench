'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9827<T> = T extends (infer U)[]
  ? DeepReadonlyArray9827<U>
  : T extends object
  ? DeepReadonlyObject9827<T>
  : T;

interface DeepReadonlyArray9827<T> extends ReadonlyArray<DeepReadonly9827<T>> {}

type DeepReadonlyObject9827<T> = {
  readonly [P in keyof T]: DeepReadonly9827<T[P]>;
};

type UnionToIntersection9827<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9827<T> = UnionToIntersection9827<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9827<T extends unknown[], V> = [...T, V];

type TuplifyUnion9827<T, L = LastOf9827<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9827<TuplifyUnion9827<Exclude<T, L>>, L>;

type DeepPartial9827<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9827<T[P]> }
  : T;

type Paths9827<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9827<K, Paths9827<T[K], Prev9827[D]>> : never }[keyof T]
  : never;

type Prev9827 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9827<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9827 {
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

type ConfigPaths9827 = Paths9827<NestedConfig9827>;

interface HeavyProps9827 {
  config: DeepPartial9827<NestedConfig9827>;
  path?: ConfigPaths9827;
}

const HeavyComponent9827 = memo(function HeavyComponent9827({ config }: HeavyProps9827) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9827) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9827 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9827: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9827.displayName = 'HeavyComponent9827';
export default HeavyComponent9827;
