'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14390<T> = T extends (infer U)[]
  ? DeepReadonlyArray14390<U>
  : T extends object
  ? DeepReadonlyObject14390<T>
  : T;

interface DeepReadonlyArray14390<T> extends ReadonlyArray<DeepReadonly14390<T>> {}

type DeepReadonlyObject14390<T> = {
  readonly [P in keyof T]: DeepReadonly14390<T[P]>;
};

type UnionToIntersection14390<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14390<T> = UnionToIntersection14390<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14390<T extends unknown[], V> = [...T, V];

type TuplifyUnion14390<T, L = LastOf14390<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14390<TuplifyUnion14390<Exclude<T, L>>, L>;

type DeepPartial14390<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14390<T[P]> }
  : T;

type Paths14390<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14390<K, Paths14390<T[K], Prev14390[D]>> : never }[keyof T]
  : never;

type Prev14390 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14390<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14390 {
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

type ConfigPaths14390 = Paths14390<NestedConfig14390>;

interface HeavyProps14390 {
  config: DeepPartial14390<NestedConfig14390>;
  path?: ConfigPaths14390;
}

const HeavyComponent14390 = memo(function HeavyComponent14390({ config }: HeavyProps14390) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14390) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14390 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14390: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14390.displayName = 'HeavyComponent14390';
export default HeavyComponent14390;
