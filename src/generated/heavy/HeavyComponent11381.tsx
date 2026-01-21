'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11381<T> = T extends (infer U)[]
  ? DeepReadonlyArray11381<U>
  : T extends object
  ? DeepReadonlyObject11381<T>
  : T;

interface DeepReadonlyArray11381<T> extends ReadonlyArray<DeepReadonly11381<T>> {}

type DeepReadonlyObject11381<T> = {
  readonly [P in keyof T]: DeepReadonly11381<T[P]>;
};

type UnionToIntersection11381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11381<T> = UnionToIntersection11381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11381<T extends unknown[], V> = [...T, V];

type TuplifyUnion11381<T, L = LastOf11381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11381<TuplifyUnion11381<Exclude<T, L>>, L>;

type DeepPartial11381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11381<T[P]> }
  : T;

type Paths11381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11381<K, Paths11381<T[K], Prev11381[D]>> : never }[keyof T]
  : never;

type Prev11381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11381 {
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

type ConfigPaths11381 = Paths11381<NestedConfig11381>;

interface HeavyProps11381 {
  config: DeepPartial11381<NestedConfig11381>;
  path?: ConfigPaths11381;
}

const HeavyComponent11381 = memo(function HeavyComponent11381({ config }: HeavyProps11381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11381.displayName = 'HeavyComponent11381';
export default HeavyComponent11381;
