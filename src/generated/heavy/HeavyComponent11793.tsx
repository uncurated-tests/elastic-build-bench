'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11793<T> = T extends (infer U)[]
  ? DeepReadonlyArray11793<U>
  : T extends object
  ? DeepReadonlyObject11793<T>
  : T;

interface DeepReadonlyArray11793<T> extends ReadonlyArray<DeepReadonly11793<T>> {}

type DeepReadonlyObject11793<T> = {
  readonly [P in keyof T]: DeepReadonly11793<T[P]>;
};

type UnionToIntersection11793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11793<T> = UnionToIntersection11793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11793<T extends unknown[], V> = [...T, V];

type TuplifyUnion11793<T, L = LastOf11793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11793<TuplifyUnion11793<Exclude<T, L>>, L>;

type DeepPartial11793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11793<T[P]> }
  : T;

type Paths11793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11793<K, Paths11793<T[K], Prev11793[D]>> : never }[keyof T]
  : never;

type Prev11793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11793 {
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

type ConfigPaths11793 = Paths11793<NestedConfig11793>;

interface HeavyProps11793 {
  config: DeepPartial11793<NestedConfig11793>;
  path?: ConfigPaths11793;
}

const HeavyComponent11793 = memo(function HeavyComponent11793({ config }: HeavyProps11793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11793.displayName = 'HeavyComponent11793';
export default HeavyComponent11793;
