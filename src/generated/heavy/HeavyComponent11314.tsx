'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11314<T> = T extends (infer U)[]
  ? DeepReadonlyArray11314<U>
  : T extends object
  ? DeepReadonlyObject11314<T>
  : T;

interface DeepReadonlyArray11314<T> extends ReadonlyArray<DeepReadonly11314<T>> {}

type DeepReadonlyObject11314<T> = {
  readonly [P in keyof T]: DeepReadonly11314<T[P]>;
};

type UnionToIntersection11314<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11314<T> = UnionToIntersection11314<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11314<T extends unknown[], V> = [...T, V];

type TuplifyUnion11314<T, L = LastOf11314<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11314<TuplifyUnion11314<Exclude<T, L>>, L>;

type DeepPartial11314<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11314<T[P]> }
  : T;

type Paths11314<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11314<K, Paths11314<T[K], Prev11314[D]>> : never }[keyof T]
  : never;

type Prev11314 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11314<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11314 {
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

type ConfigPaths11314 = Paths11314<NestedConfig11314>;

interface HeavyProps11314 {
  config: DeepPartial11314<NestedConfig11314>;
  path?: ConfigPaths11314;
}

const HeavyComponent11314 = memo(function HeavyComponent11314({ config }: HeavyProps11314) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11314) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11314 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11314: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11314.displayName = 'HeavyComponent11314';
export default HeavyComponent11314;
