'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11417<T> = T extends (infer U)[]
  ? DeepReadonlyArray11417<U>
  : T extends object
  ? DeepReadonlyObject11417<T>
  : T;

interface DeepReadonlyArray11417<T> extends ReadonlyArray<DeepReadonly11417<T>> {}

type DeepReadonlyObject11417<T> = {
  readonly [P in keyof T]: DeepReadonly11417<T[P]>;
};

type UnionToIntersection11417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11417<T> = UnionToIntersection11417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11417<T extends unknown[], V> = [...T, V];

type TuplifyUnion11417<T, L = LastOf11417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11417<TuplifyUnion11417<Exclude<T, L>>, L>;

type DeepPartial11417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11417<T[P]> }
  : T;

type Paths11417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11417<K, Paths11417<T[K], Prev11417[D]>> : never }[keyof T]
  : never;

type Prev11417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11417 {
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

type ConfigPaths11417 = Paths11417<NestedConfig11417>;

interface HeavyProps11417 {
  config: DeepPartial11417<NestedConfig11417>;
  path?: ConfigPaths11417;
}

const HeavyComponent11417 = memo(function HeavyComponent11417({ config }: HeavyProps11417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11417.displayName = 'HeavyComponent11417';
export default HeavyComponent11417;
