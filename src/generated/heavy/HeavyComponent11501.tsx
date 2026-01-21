'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11501<T> = T extends (infer U)[]
  ? DeepReadonlyArray11501<U>
  : T extends object
  ? DeepReadonlyObject11501<T>
  : T;

interface DeepReadonlyArray11501<T> extends ReadonlyArray<DeepReadonly11501<T>> {}

type DeepReadonlyObject11501<T> = {
  readonly [P in keyof T]: DeepReadonly11501<T[P]>;
};

type UnionToIntersection11501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11501<T> = UnionToIntersection11501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11501<T extends unknown[], V> = [...T, V];

type TuplifyUnion11501<T, L = LastOf11501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11501<TuplifyUnion11501<Exclude<T, L>>, L>;

type DeepPartial11501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11501<T[P]> }
  : T;

type Paths11501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11501<K, Paths11501<T[K], Prev11501[D]>> : never }[keyof T]
  : never;

type Prev11501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11501 {
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

type ConfigPaths11501 = Paths11501<NestedConfig11501>;

interface HeavyProps11501 {
  config: DeepPartial11501<NestedConfig11501>;
  path?: ConfigPaths11501;
}

const HeavyComponent11501 = memo(function HeavyComponent11501({ config }: HeavyProps11501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11501.displayName = 'HeavyComponent11501';
export default HeavyComponent11501;
