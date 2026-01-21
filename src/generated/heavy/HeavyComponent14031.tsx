'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14031<T> = T extends (infer U)[]
  ? DeepReadonlyArray14031<U>
  : T extends object
  ? DeepReadonlyObject14031<T>
  : T;

interface DeepReadonlyArray14031<T> extends ReadonlyArray<DeepReadonly14031<T>> {}

type DeepReadonlyObject14031<T> = {
  readonly [P in keyof T]: DeepReadonly14031<T[P]>;
};

type UnionToIntersection14031<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14031<T> = UnionToIntersection14031<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14031<T extends unknown[], V> = [...T, V];

type TuplifyUnion14031<T, L = LastOf14031<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14031<TuplifyUnion14031<Exclude<T, L>>, L>;

type DeepPartial14031<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14031<T[P]> }
  : T;

type Paths14031<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14031<K, Paths14031<T[K], Prev14031[D]>> : never }[keyof T]
  : never;

type Prev14031 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14031<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14031 {
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

type ConfigPaths14031 = Paths14031<NestedConfig14031>;

interface HeavyProps14031 {
  config: DeepPartial14031<NestedConfig14031>;
  path?: ConfigPaths14031;
}

const HeavyComponent14031 = memo(function HeavyComponent14031({ config }: HeavyProps14031) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14031) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14031 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14031: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14031.displayName = 'HeavyComponent14031';
export default HeavyComponent14031;
