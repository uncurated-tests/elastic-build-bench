'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly257<T> = T extends (infer U)[]
  ? DeepReadonlyArray257<U>
  : T extends object
  ? DeepReadonlyObject257<T>
  : T;

interface DeepReadonlyArray257<T> extends ReadonlyArray<DeepReadonly257<T>> {}

type DeepReadonlyObject257<T> = {
  readonly [P in keyof T]: DeepReadonly257<T[P]>;
};

type UnionToIntersection257<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf257<T> = UnionToIntersection257<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push257<T extends unknown[], V> = [...T, V];

type TuplifyUnion257<T, L = LastOf257<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push257<TuplifyUnion257<Exclude<T, L>>, L>;

type DeepPartial257<T> = T extends object
  ? { [P in keyof T]?: DeepPartial257<T[P]> }
  : T;

type Paths257<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join257<K, Paths257<T[K], Prev257[D]>> : never }[keyof T]
  : never;

type Prev257 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join257<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig257 {
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

type ConfigPaths257 = Paths257<NestedConfig257>;

interface HeavyProps257 {
  config: DeepPartial257<NestedConfig257>;
  path?: ConfigPaths257;
}

const HeavyComponent257 = memo(function HeavyComponent257({ config }: HeavyProps257) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 257) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-257 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H257: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent257.displayName = 'HeavyComponent257';
export default HeavyComponent257;
