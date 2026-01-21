'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11955<T> = T extends (infer U)[]
  ? DeepReadonlyArray11955<U>
  : T extends object
  ? DeepReadonlyObject11955<T>
  : T;

interface DeepReadonlyArray11955<T> extends ReadonlyArray<DeepReadonly11955<T>> {}

type DeepReadonlyObject11955<T> = {
  readonly [P in keyof T]: DeepReadonly11955<T[P]>;
};

type UnionToIntersection11955<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11955<T> = UnionToIntersection11955<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11955<T extends unknown[], V> = [...T, V];

type TuplifyUnion11955<T, L = LastOf11955<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11955<TuplifyUnion11955<Exclude<T, L>>, L>;

type DeepPartial11955<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11955<T[P]> }
  : T;

type Paths11955<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11955<K, Paths11955<T[K], Prev11955[D]>> : never }[keyof T]
  : never;

type Prev11955 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11955<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11955 {
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

type ConfigPaths11955 = Paths11955<NestedConfig11955>;

interface HeavyProps11955 {
  config: DeepPartial11955<NestedConfig11955>;
  path?: ConfigPaths11955;
}

const HeavyComponent11955 = memo(function HeavyComponent11955({ config }: HeavyProps11955) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11955) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11955 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11955: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11955.displayName = 'HeavyComponent11955';
export default HeavyComponent11955;
