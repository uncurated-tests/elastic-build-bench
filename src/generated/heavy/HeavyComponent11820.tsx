'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11820<T> = T extends (infer U)[]
  ? DeepReadonlyArray11820<U>
  : T extends object
  ? DeepReadonlyObject11820<T>
  : T;

interface DeepReadonlyArray11820<T> extends ReadonlyArray<DeepReadonly11820<T>> {}

type DeepReadonlyObject11820<T> = {
  readonly [P in keyof T]: DeepReadonly11820<T[P]>;
};

type UnionToIntersection11820<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11820<T> = UnionToIntersection11820<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11820<T extends unknown[], V> = [...T, V];

type TuplifyUnion11820<T, L = LastOf11820<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11820<TuplifyUnion11820<Exclude<T, L>>, L>;

type DeepPartial11820<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11820<T[P]> }
  : T;

type Paths11820<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11820<K, Paths11820<T[K], Prev11820[D]>> : never }[keyof T]
  : never;

type Prev11820 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11820<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11820 {
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

type ConfigPaths11820 = Paths11820<NestedConfig11820>;

interface HeavyProps11820 {
  config: DeepPartial11820<NestedConfig11820>;
  path?: ConfigPaths11820;
}

const HeavyComponent11820 = memo(function HeavyComponent11820({ config }: HeavyProps11820) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11820) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11820 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11820: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11820.displayName = 'HeavyComponent11820';
export default HeavyComponent11820;
