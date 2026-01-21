'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11986<T> = T extends (infer U)[]
  ? DeepReadonlyArray11986<U>
  : T extends object
  ? DeepReadonlyObject11986<T>
  : T;

interface DeepReadonlyArray11986<T> extends ReadonlyArray<DeepReadonly11986<T>> {}

type DeepReadonlyObject11986<T> = {
  readonly [P in keyof T]: DeepReadonly11986<T[P]>;
};

type UnionToIntersection11986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11986<T> = UnionToIntersection11986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11986<T extends unknown[], V> = [...T, V];

type TuplifyUnion11986<T, L = LastOf11986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11986<TuplifyUnion11986<Exclude<T, L>>, L>;

type DeepPartial11986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11986<T[P]> }
  : T;

type Paths11986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11986<K, Paths11986<T[K], Prev11986[D]>> : never }[keyof T]
  : never;

type Prev11986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11986 {
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

type ConfigPaths11986 = Paths11986<NestedConfig11986>;

interface HeavyProps11986 {
  config: DeepPartial11986<NestedConfig11986>;
  path?: ConfigPaths11986;
}

const HeavyComponent11986 = memo(function HeavyComponent11986({ config }: HeavyProps11986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11986.displayName = 'HeavyComponent11986';
export default HeavyComponent11986;
