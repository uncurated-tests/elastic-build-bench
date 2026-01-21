'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11328<T> = T extends (infer U)[]
  ? DeepReadonlyArray11328<U>
  : T extends object
  ? DeepReadonlyObject11328<T>
  : T;

interface DeepReadonlyArray11328<T> extends ReadonlyArray<DeepReadonly11328<T>> {}

type DeepReadonlyObject11328<T> = {
  readonly [P in keyof T]: DeepReadonly11328<T[P]>;
};

type UnionToIntersection11328<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11328<T> = UnionToIntersection11328<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11328<T extends unknown[], V> = [...T, V];

type TuplifyUnion11328<T, L = LastOf11328<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11328<TuplifyUnion11328<Exclude<T, L>>, L>;

type DeepPartial11328<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11328<T[P]> }
  : T;

type Paths11328<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11328<K, Paths11328<T[K], Prev11328[D]>> : never }[keyof T]
  : never;

type Prev11328 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11328<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11328 {
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

type ConfigPaths11328 = Paths11328<NestedConfig11328>;

interface HeavyProps11328 {
  config: DeepPartial11328<NestedConfig11328>;
  path?: ConfigPaths11328;
}

const HeavyComponent11328 = memo(function HeavyComponent11328({ config }: HeavyProps11328) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11328) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11328 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11328: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11328.displayName = 'HeavyComponent11328';
export default HeavyComponent11328;
