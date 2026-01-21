'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11075<T> = T extends (infer U)[]
  ? DeepReadonlyArray11075<U>
  : T extends object
  ? DeepReadonlyObject11075<T>
  : T;

interface DeepReadonlyArray11075<T> extends ReadonlyArray<DeepReadonly11075<T>> {}

type DeepReadonlyObject11075<T> = {
  readonly [P in keyof T]: DeepReadonly11075<T[P]>;
};

type UnionToIntersection11075<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11075<T> = UnionToIntersection11075<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11075<T extends unknown[], V> = [...T, V];

type TuplifyUnion11075<T, L = LastOf11075<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11075<TuplifyUnion11075<Exclude<T, L>>, L>;

type DeepPartial11075<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11075<T[P]> }
  : T;

type Paths11075<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11075<K, Paths11075<T[K], Prev11075[D]>> : never }[keyof T]
  : never;

type Prev11075 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11075<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11075 {
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

type ConfigPaths11075 = Paths11075<NestedConfig11075>;

interface HeavyProps11075 {
  config: DeepPartial11075<NestedConfig11075>;
  path?: ConfigPaths11075;
}

const HeavyComponent11075 = memo(function HeavyComponent11075({ config }: HeavyProps11075) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11075) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11075 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11075: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11075.displayName = 'HeavyComponent11075';
export default HeavyComponent11075;
