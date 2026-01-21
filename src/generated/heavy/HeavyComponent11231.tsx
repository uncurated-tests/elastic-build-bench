'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11231<T> = T extends (infer U)[]
  ? DeepReadonlyArray11231<U>
  : T extends object
  ? DeepReadonlyObject11231<T>
  : T;

interface DeepReadonlyArray11231<T> extends ReadonlyArray<DeepReadonly11231<T>> {}

type DeepReadonlyObject11231<T> = {
  readonly [P in keyof T]: DeepReadonly11231<T[P]>;
};

type UnionToIntersection11231<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11231<T> = UnionToIntersection11231<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11231<T extends unknown[], V> = [...T, V];

type TuplifyUnion11231<T, L = LastOf11231<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11231<TuplifyUnion11231<Exclude<T, L>>, L>;

type DeepPartial11231<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11231<T[P]> }
  : T;

type Paths11231<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11231<K, Paths11231<T[K], Prev11231[D]>> : never }[keyof T]
  : never;

type Prev11231 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11231<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11231 {
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

type ConfigPaths11231 = Paths11231<NestedConfig11231>;

interface HeavyProps11231 {
  config: DeepPartial11231<NestedConfig11231>;
  path?: ConfigPaths11231;
}

const HeavyComponent11231 = memo(function HeavyComponent11231({ config }: HeavyProps11231) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11231) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11231 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11231: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11231.displayName = 'HeavyComponent11231';
export default HeavyComponent11231;
