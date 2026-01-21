'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14820<T> = T extends (infer U)[]
  ? DeepReadonlyArray14820<U>
  : T extends object
  ? DeepReadonlyObject14820<T>
  : T;

interface DeepReadonlyArray14820<T> extends ReadonlyArray<DeepReadonly14820<T>> {}

type DeepReadonlyObject14820<T> = {
  readonly [P in keyof T]: DeepReadonly14820<T[P]>;
};

type UnionToIntersection14820<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14820<T> = UnionToIntersection14820<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14820<T extends unknown[], V> = [...T, V];

type TuplifyUnion14820<T, L = LastOf14820<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14820<TuplifyUnion14820<Exclude<T, L>>, L>;

type DeepPartial14820<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14820<T[P]> }
  : T;

type Paths14820<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14820<K, Paths14820<T[K], Prev14820[D]>> : never }[keyof T]
  : never;

type Prev14820 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14820<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14820 {
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

type ConfigPaths14820 = Paths14820<NestedConfig14820>;

interface HeavyProps14820 {
  config: DeepPartial14820<NestedConfig14820>;
  path?: ConfigPaths14820;
}

const HeavyComponent14820 = memo(function HeavyComponent14820({ config }: HeavyProps14820) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14820) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14820 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14820: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14820.displayName = 'HeavyComponent14820';
export default HeavyComponent14820;
