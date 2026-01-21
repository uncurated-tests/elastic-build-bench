'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11675<T> = T extends (infer U)[]
  ? DeepReadonlyArray11675<U>
  : T extends object
  ? DeepReadonlyObject11675<T>
  : T;

interface DeepReadonlyArray11675<T> extends ReadonlyArray<DeepReadonly11675<T>> {}

type DeepReadonlyObject11675<T> = {
  readonly [P in keyof T]: DeepReadonly11675<T[P]>;
};

type UnionToIntersection11675<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11675<T> = UnionToIntersection11675<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11675<T extends unknown[], V> = [...T, V];

type TuplifyUnion11675<T, L = LastOf11675<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11675<TuplifyUnion11675<Exclude<T, L>>, L>;

type DeepPartial11675<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11675<T[P]> }
  : T;

type Paths11675<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11675<K, Paths11675<T[K], Prev11675[D]>> : never }[keyof T]
  : never;

type Prev11675 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11675<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11675 {
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

type ConfigPaths11675 = Paths11675<NestedConfig11675>;

interface HeavyProps11675 {
  config: DeepPartial11675<NestedConfig11675>;
  path?: ConfigPaths11675;
}

const HeavyComponent11675 = memo(function HeavyComponent11675({ config }: HeavyProps11675) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11675) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11675 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11675: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11675.displayName = 'HeavyComponent11675';
export default HeavyComponent11675;
