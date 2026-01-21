'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11975<T> = T extends (infer U)[]
  ? DeepReadonlyArray11975<U>
  : T extends object
  ? DeepReadonlyObject11975<T>
  : T;

interface DeepReadonlyArray11975<T> extends ReadonlyArray<DeepReadonly11975<T>> {}

type DeepReadonlyObject11975<T> = {
  readonly [P in keyof T]: DeepReadonly11975<T[P]>;
};

type UnionToIntersection11975<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11975<T> = UnionToIntersection11975<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11975<T extends unknown[], V> = [...T, V];

type TuplifyUnion11975<T, L = LastOf11975<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11975<TuplifyUnion11975<Exclude<T, L>>, L>;

type DeepPartial11975<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11975<T[P]> }
  : T;

type Paths11975<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11975<K, Paths11975<T[K], Prev11975[D]>> : never }[keyof T]
  : never;

type Prev11975 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11975<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11975 {
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

type ConfigPaths11975 = Paths11975<NestedConfig11975>;

interface HeavyProps11975 {
  config: DeepPartial11975<NestedConfig11975>;
  path?: ConfigPaths11975;
}

const HeavyComponent11975 = memo(function HeavyComponent11975({ config }: HeavyProps11975) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11975) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11975 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11975: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11975.displayName = 'HeavyComponent11975';
export default HeavyComponent11975;
