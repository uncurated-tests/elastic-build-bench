'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11520<T> = T extends (infer U)[]
  ? DeepReadonlyArray11520<U>
  : T extends object
  ? DeepReadonlyObject11520<T>
  : T;

interface DeepReadonlyArray11520<T> extends ReadonlyArray<DeepReadonly11520<T>> {}

type DeepReadonlyObject11520<T> = {
  readonly [P in keyof T]: DeepReadonly11520<T[P]>;
};

type UnionToIntersection11520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11520<T> = UnionToIntersection11520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11520<T extends unknown[], V> = [...T, V];

type TuplifyUnion11520<T, L = LastOf11520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11520<TuplifyUnion11520<Exclude<T, L>>, L>;

type DeepPartial11520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11520<T[P]> }
  : T;

type Paths11520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11520<K, Paths11520<T[K], Prev11520[D]>> : never }[keyof T]
  : never;

type Prev11520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11520 {
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

type ConfigPaths11520 = Paths11520<NestedConfig11520>;

interface HeavyProps11520 {
  config: DeepPartial11520<NestedConfig11520>;
  path?: ConfigPaths11520;
}

const HeavyComponent11520 = memo(function HeavyComponent11520({ config }: HeavyProps11520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11520.displayName = 'HeavyComponent11520';
export default HeavyComponent11520;
