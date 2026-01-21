'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11710<T> = T extends (infer U)[]
  ? DeepReadonlyArray11710<U>
  : T extends object
  ? DeepReadonlyObject11710<T>
  : T;

interface DeepReadonlyArray11710<T> extends ReadonlyArray<DeepReadonly11710<T>> {}

type DeepReadonlyObject11710<T> = {
  readonly [P in keyof T]: DeepReadonly11710<T[P]>;
};

type UnionToIntersection11710<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11710<T> = UnionToIntersection11710<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11710<T extends unknown[], V> = [...T, V];

type TuplifyUnion11710<T, L = LastOf11710<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11710<TuplifyUnion11710<Exclude<T, L>>, L>;

type DeepPartial11710<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11710<T[P]> }
  : T;

type Paths11710<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11710<K, Paths11710<T[K], Prev11710[D]>> : never }[keyof T]
  : never;

type Prev11710 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11710<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11710 {
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

type ConfigPaths11710 = Paths11710<NestedConfig11710>;

interface HeavyProps11710 {
  config: DeepPartial11710<NestedConfig11710>;
  path?: ConfigPaths11710;
}

const HeavyComponent11710 = memo(function HeavyComponent11710({ config }: HeavyProps11710) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11710) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11710 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11710: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11710.displayName = 'HeavyComponent11710';
export default HeavyComponent11710;
