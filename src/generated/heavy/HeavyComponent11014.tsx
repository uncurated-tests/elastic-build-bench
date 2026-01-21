'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11014<T> = T extends (infer U)[]
  ? DeepReadonlyArray11014<U>
  : T extends object
  ? DeepReadonlyObject11014<T>
  : T;

interface DeepReadonlyArray11014<T> extends ReadonlyArray<DeepReadonly11014<T>> {}

type DeepReadonlyObject11014<T> = {
  readonly [P in keyof T]: DeepReadonly11014<T[P]>;
};

type UnionToIntersection11014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11014<T> = UnionToIntersection11014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11014<T extends unknown[], V> = [...T, V];

type TuplifyUnion11014<T, L = LastOf11014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11014<TuplifyUnion11014<Exclude<T, L>>, L>;

type DeepPartial11014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11014<T[P]> }
  : T;

type Paths11014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11014<K, Paths11014<T[K], Prev11014[D]>> : never }[keyof T]
  : never;

type Prev11014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11014 {
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

type ConfigPaths11014 = Paths11014<NestedConfig11014>;

interface HeavyProps11014 {
  config: DeepPartial11014<NestedConfig11014>;
  path?: ConfigPaths11014;
}

const HeavyComponent11014 = memo(function HeavyComponent11014({ config }: HeavyProps11014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11014.displayName = 'HeavyComponent11014';
export default HeavyComponent11014;
