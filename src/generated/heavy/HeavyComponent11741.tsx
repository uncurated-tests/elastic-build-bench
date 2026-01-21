'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11741<T> = T extends (infer U)[]
  ? DeepReadonlyArray11741<U>
  : T extends object
  ? DeepReadonlyObject11741<T>
  : T;

interface DeepReadonlyArray11741<T> extends ReadonlyArray<DeepReadonly11741<T>> {}

type DeepReadonlyObject11741<T> = {
  readonly [P in keyof T]: DeepReadonly11741<T[P]>;
};

type UnionToIntersection11741<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11741<T> = UnionToIntersection11741<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11741<T extends unknown[], V> = [...T, V];

type TuplifyUnion11741<T, L = LastOf11741<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11741<TuplifyUnion11741<Exclude<T, L>>, L>;

type DeepPartial11741<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11741<T[P]> }
  : T;

type Paths11741<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11741<K, Paths11741<T[K], Prev11741[D]>> : never }[keyof T]
  : never;

type Prev11741 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11741<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11741 {
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

type ConfigPaths11741 = Paths11741<NestedConfig11741>;

interface HeavyProps11741 {
  config: DeepPartial11741<NestedConfig11741>;
  path?: ConfigPaths11741;
}

const HeavyComponent11741 = memo(function HeavyComponent11741({ config }: HeavyProps11741) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11741) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11741 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11741: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11741.displayName = 'HeavyComponent11741';
export default HeavyComponent11741;
