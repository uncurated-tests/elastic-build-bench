'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9380<T> = T extends (infer U)[]
  ? DeepReadonlyArray9380<U>
  : T extends object
  ? DeepReadonlyObject9380<T>
  : T;

interface DeepReadonlyArray9380<T> extends ReadonlyArray<DeepReadonly9380<T>> {}

type DeepReadonlyObject9380<T> = {
  readonly [P in keyof T]: DeepReadonly9380<T[P]>;
};

type UnionToIntersection9380<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9380<T> = UnionToIntersection9380<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9380<T extends unknown[], V> = [...T, V];

type TuplifyUnion9380<T, L = LastOf9380<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9380<TuplifyUnion9380<Exclude<T, L>>, L>;

type DeepPartial9380<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9380<T[P]> }
  : T;

type Paths9380<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9380<K, Paths9380<T[K], Prev9380[D]>> : never }[keyof T]
  : never;

type Prev9380 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9380<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9380 {
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

type ConfigPaths9380 = Paths9380<NestedConfig9380>;

interface HeavyProps9380 {
  config: DeepPartial9380<NestedConfig9380>;
  path?: ConfigPaths9380;
}

const HeavyComponent9380 = memo(function HeavyComponent9380({ config }: HeavyProps9380) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9380) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9380 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9380: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9380.displayName = 'HeavyComponent9380';
export default HeavyComponent9380;
