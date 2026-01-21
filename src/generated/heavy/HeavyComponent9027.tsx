'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9027<T> = T extends (infer U)[]
  ? DeepReadonlyArray9027<U>
  : T extends object
  ? DeepReadonlyObject9027<T>
  : T;

interface DeepReadonlyArray9027<T> extends ReadonlyArray<DeepReadonly9027<T>> {}

type DeepReadonlyObject9027<T> = {
  readonly [P in keyof T]: DeepReadonly9027<T[P]>;
};

type UnionToIntersection9027<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9027<T> = UnionToIntersection9027<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9027<T extends unknown[], V> = [...T, V];

type TuplifyUnion9027<T, L = LastOf9027<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9027<TuplifyUnion9027<Exclude<T, L>>, L>;

type DeepPartial9027<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9027<T[P]> }
  : T;

type Paths9027<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9027<K, Paths9027<T[K], Prev9027[D]>> : never }[keyof T]
  : never;

type Prev9027 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9027<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9027 {
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

type ConfigPaths9027 = Paths9027<NestedConfig9027>;

interface HeavyProps9027 {
  config: DeepPartial9027<NestedConfig9027>;
  path?: ConfigPaths9027;
}

const HeavyComponent9027 = memo(function HeavyComponent9027({ config }: HeavyProps9027) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9027) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9027 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9027: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9027.displayName = 'HeavyComponent9027';
export default HeavyComponent9027;
