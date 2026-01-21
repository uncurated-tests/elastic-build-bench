'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly656<T> = T extends (infer U)[]
  ? DeepReadonlyArray656<U>
  : T extends object
  ? DeepReadonlyObject656<T>
  : T;

interface DeepReadonlyArray656<T> extends ReadonlyArray<DeepReadonly656<T>> {}

type DeepReadonlyObject656<T> = {
  readonly [P in keyof T]: DeepReadonly656<T[P]>;
};

type UnionToIntersection656<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf656<T> = UnionToIntersection656<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push656<T extends unknown[], V> = [...T, V];

type TuplifyUnion656<T, L = LastOf656<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push656<TuplifyUnion656<Exclude<T, L>>, L>;

type DeepPartial656<T> = T extends object
  ? { [P in keyof T]?: DeepPartial656<T[P]> }
  : T;

type Paths656<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join656<K, Paths656<T[K], Prev656[D]>> : never }[keyof T]
  : never;

type Prev656 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join656<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig656 {
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

type ConfigPaths656 = Paths656<NestedConfig656>;

interface HeavyProps656 {
  config: DeepPartial656<NestedConfig656>;
  path?: ConfigPaths656;
}

const HeavyComponent656 = memo(function HeavyComponent656({ config }: HeavyProps656) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 656) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-656 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H656: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent656.displayName = 'HeavyComponent656';
export default HeavyComponent656;
