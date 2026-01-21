'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14616<T> = T extends (infer U)[]
  ? DeepReadonlyArray14616<U>
  : T extends object
  ? DeepReadonlyObject14616<T>
  : T;

interface DeepReadonlyArray14616<T> extends ReadonlyArray<DeepReadonly14616<T>> {}

type DeepReadonlyObject14616<T> = {
  readonly [P in keyof T]: DeepReadonly14616<T[P]>;
};

type UnionToIntersection14616<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14616<T> = UnionToIntersection14616<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14616<T extends unknown[], V> = [...T, V];

type TuplifyUnion14616<T, L = LastOf14616<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14616<TuplifyUnion14616<Exclude<T, L>>, L>;

type DeepPartial14616<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14616<T[P]> }
  : T;

type Paths14616<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14616<K, Paths14616<T[K], Prev14616[D]>> : never }[keyof T]
  : never;

type Prev14616 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14616<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14616 {
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

type ConfigPaths14616 = Paths14616<NestedConfig14616>;

interface HeavyProps14616 {
  config: DeepPartial14616<NestedConfig14616>;
  path?: ConfigPaths14616;
}

const HeavyComponent14616 = memo(function HeavyComponent14616({ config }: HeavyProps14616) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14616) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14616 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14616: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14616.displayName = 'HeavyComponent14616';
export default HeavyComponent14616;
