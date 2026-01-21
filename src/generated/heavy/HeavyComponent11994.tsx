'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11994<T> = T extends (infer U)[]
  ? DeepReadonlyArray11994<U>
  : T extends object
  ? DeepReadonlyObject11994<T>
  : T;

interface DeepReadonlyArray11994<T> extends ReadonlyArray<DeepReadonly11994<T>> {}

type DeepReadonlyObject11994<T> = {
  readonly [P in keyof T]: DeepReadonly11994<T[P]>;
};

type UnionToIntersection11994<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11994<T> = UnionToIntersection11994<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11994<T extends unknown[], V> = [...T, V];

type TuplifyUnion11994<T, L = LastOf11994<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11994<TuplifyUnion11994<Exclude<T, L>>, L>;

type DeepPartial11994<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11994<T[P]> }
  : T;

type Paths11994<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11994<K, Paths11994<T[K], Prev11994[D]>> : never }[keyof T]
  : never;

type Prev11994 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11994<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11994 {
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

type ConfigPaths11994 = Paths11994<NestedConfig11994>;

interface HeavyProps11994 {
  config: DeepPartial11994<NestedConfig11994>;
  path?: ConfigPaths11994;
}

const HeavyComponent11994 = memo(function HeavyComponent11994({ config }: HeavyProps11994) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11994) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11994 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11994: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11994.displayName = 'HeavyComponent11994';
export default HeavyComponent11994;
