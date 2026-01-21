'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11637<T> = T extends (infer U)[]
  ? DeepReadonlyArray11637<U>
  : T extends object
  ? DeepReadonlyObject11637<T>
  : T;

interface DeepReadonlyArray11637<T> extends ReadonlyArray<DeepReadonly11637<T>> {}

type DeepReadonlyObject11637<T> = {
  readonly [P in keyof T]: DeepReadonly11637<T[P]>;
};

type UnionToIntersection11637<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11637<T> = UnionToIntersection11637<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11637<T extends unknown[], V> = [...T, V];

type TuplifyUnion11637<T, L = LastOf11637<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11637<TuplifyUnion11637<Exclude<T, L>>, L>;

type DeepPartial11637<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11637<T[P]> }
  : T;

type Paths11637<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11637<K, Paths11637<T[K], Prev11637[D]>> : never }[keyof T]
  : never;

type Prev11637 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11637<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11637 {
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

type ConfigPaths11637 = Paths11637<NestedConfig11637>;

interface HeavyProps11637 {
  config: DeepPartial11637<NestedConfig11637>;
  path?: ConfigPaths11637;
}

const HeavyComponent11637 = memo(function HeavyComponent11637({ config }: HeavyProps11637) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11637) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11637 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11637: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11637.displayName = 'HeavyComponent11637';
export default HeavyComponent11637;
