'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14338<T> = T extends (infer U)[]
  ? DeepReadonlyArray14338<U>
  : T extends object
  ? DeepReadonlyObject14338<T>
  : T;

interface DeepReadonlyArray14338<T> extends ReadonlyArray<DeepReadonly14338<T>> {}

type DeepReadonlyObject14338<T> = {
  readonly [P in keyof T]: DeepReadonly14338<T[P]>;
};

type UnionToIntersection14338<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14338<T> = UnionToIntersection14338<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14338<T extends unknown[], V> = [...T, V];

type TuplifyUnion14338<T, L = LastOf14338<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14338<TuplifyUnion14338<Exclude<T, L>>, L>;

type DeepPartial14338<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14338<T[P]> }
  : T;

type Paths14338<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14338<K, Paths14338<T[K], Prev14338[D]>> : never }[keyof T]
  : never;

type Prev14338 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14338<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14338 {
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

type ConfigPaths14338 = Paths14338<NestedConfig14338>;

interface HeavyProps14338 {
  config: DeepPartial14338<NestedConfig14338>;
  path?: ConfigPaths14338;
}

const HeavyComponent14338 = memo(function HeavyComponent14338({ config }: HeavyProps14338) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14338) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14338 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14338: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14338.displayName = 'HeavyComponent14338';
export default HeavyComponent14338;
