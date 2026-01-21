'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14520<T> = T extends (infer U)[]
  ? DeepReadonlyArray14520<U>
  : T extends object
  ? DeepReadonlyObject14520<T>
  : T;

interface DeepReadonlyArray14520<T> extends ReadonlyArray<DeepReadonly14520<T>> {}

type DeepReadonlyObject14520<T> = {
  readonly [P in keyof T]: DeepReadonly14520<T[P]>;
};

type UnionToIntersection14520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14520<T> = UnionToIntersection14520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14520<T extends unknown[], V> = [...T, V];

type TuplifyUnion14520<T, L = LastOf14520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14520<TuplifyUnion14520<Exclude<T, L>>, L>;

type DeepPartial14520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14520<T[P]> }
  : T;

type Paths14520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14520<K, Paths14520<T[K], Prev14520[D]>> : never }[keyof T]
  : never;

type Prev14520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14520 {
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

type ConfigPaths14520 = Paths14520<NestedConfig14520>;

interface HeavyProps14520 {
  config: DeepPartial14520<NestedConfig14520>;
  path?: ConfigPaths14520;
}

const HeavyComponent14520 = memo(function HeavyComponent14520({ config }: HeavyProps14520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14520.displayName = 'HeavyComponent14520';
export default HeavyComponent14520;
