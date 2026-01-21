'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14028<T> = T extends (infer U)[]
  ? DeepReadonlyArray14028<U>
  : T extends object
  ? DeepReadonlyObject14028<T>
  : T;

interface DeepReadonlyArray14028<T> extends ReadonlyArray<DeepReadonly14028<T>> {}

type DeepReadonlyObject14028<T> = {
  readonly [P in keyof T]: DeepReadonly14028<T[P]>;
};

type UnionToIntersection14028<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14028<T> = UnionToIntersection14028<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14028<T extends unknown[], V> = [...T, V];

type TuplifyUnion14028<T, L = LastOf14028<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14028<TuplifyUnion14028<Exclude<T, L>>, L>;

type DeepPartial14028<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14028<T[P]> }
  : T;

type Paths14028<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14028<K, Paths14028<T[K], Prev14028[D]>> : never }[keyof T]
  : never;

type Prev14028 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14028<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14028 {
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

type ConfigPaths14028 = Paths14028<NestedConfig14028>;

interface HeavyProps14028 {
  config: DeepPartial14028<NestedConfig14028>;
  path?: ConfigPaths14028;
}

const HeavyComponent14028 = memo(function HeavyComponent14028({ config }: HeavyProps14028) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14028) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14028 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14028: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14028.displayName = 'HeavyComponent14028';
export default HeavyComponent14028;
