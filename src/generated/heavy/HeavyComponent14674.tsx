'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14674<T> = T extends (infer U)[]
  ? DeepReadonlyArray14674<U>
  : T extends object
  ? DeepReadonlyObject14674<T>
  : T;

interface DeepReadonlyArray14674<T> extends ReadonlyArray<DeepReadonly14674<T>> {}

type DeepReadonlyObject14674<T> = {
  readonly [P in keyof T]: DeepReadonly14674<T[P]>;
};

type UnionToIntersection14674<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14674<T> = UnionToIntersection14674<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14674<T extends unknown[], V> = [...T, V];

type TuplifyUnion14674<T, L = LastOf14674<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14674<TuplifyUnion14674<Exclude<T, L>>, L>;

type DeepPartial14674<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14674<T[P]> }
  : T;

type Paths14674<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14674<K, Paths14674<T[K], Prev14674[D]>> : never }[keyof T]
  : never;

type Prev14674 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14674<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14674 {
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

type ConfigPaths14674 = Paths14674<NestedConfig14674>;

interface HeavyProps14674 {
  config: DeepPartial14674<NestedConfig14674>;
  path?: ConfigPaths14674;
}

const HeavyComponent14674 = memo(function HeavyComponent14674({ config }: HeavyProps14674) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14674) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14674 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14674: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14674.displayName = 'HeavyComponent14674';
export default HeavyComponent14674;
