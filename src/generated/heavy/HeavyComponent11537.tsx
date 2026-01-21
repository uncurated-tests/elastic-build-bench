'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11537<T> = T extends (infer U)[]
  ? DeepReadonlyArray11537<U>
  : T extends object
  ? DeepReadonlyObject11537<T>
  : T;

interface DeepReadonlyArray11537<T> extends ReadonlyArray<DeepReadonly11537<T>> {}

type DeepReadonlyObject11537<T> = {
  readonly [P in keyof T]: DeepReadonly11537<T[P]>;
};

type UnionToIntersection11537<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11537<T> = UnionToIntersection11537<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11537<T extends unknown[], V> = [...T, V];

type TuplifyUnion11537<T, L = LastOf11537<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11537<TuplifyUnion11537<Exclude<T, L>>, L>;

type DeepPartial11537<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11537<T[P]> }
  : T;

type Paths11537<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11537<K, Paths11537<T[K], Prev11537[D]>> : never }[keyof T]
  : never;

type Prev11537 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11537<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11537 {
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

type ConfigPaths11537 = Paths11537<NestedConfig11537>;

interface HeavyProps11537 {
  config: DeepPartial11537<NestedConfig11537>;
  path?: ConfigPaths11537;
}

const HeavyComponent11537 = memo(function HeavyComponent11537({ config }: HeavyProps11537) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11537) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11537 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11537: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11537.displayName = 'HeavyComponent11537';
export default HeavyComponent11537;
