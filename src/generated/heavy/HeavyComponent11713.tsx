'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11713<T> = T extends (infer U)[]
  ? DeepReadonlyArray11713<U>
  : T extends object
  ? DeepReadonlyObject11713<T>
  : T;

interface DeepReadonlyArray11713<T> extends ReadonlyArray<DeepReadonly11713<T>> {}

type DeepReadonlyObject11713<T> = {
  readonly [P in keyof T]: DeepReadonly11713<T[P]>;
};

type UnionToIntersection11713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11713<T> = UnionToIntersection11713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11713<T extends unknown[], V> = [...T, V];

type TuplifyUnion11713<T, L = LastOf11713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11713<TuplifyUnion11713<Exclude<T, L>>, L>;

type DeepPartial11713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11713<T[P]> }
  : T;

type Paths11713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11713<K, Paths11713<T[K], Prev11713[D]>> : never }[keyof T]
  : never;

type Prev11713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11713 {
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

type ConfigPaths11713 = Paths11713<NestedConfig11713>;

interface HeavyProps11713 {
  config: DeepPartial11713<NestedConfig11713>;
  path?: ConfigPaths11713;
}

const HeavyComponent11713 = memo(function HeavyComponent11713({ config }: HeavyProps11713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11713.displayName = 'HeavyComponent11713';
export default HeavyComponent11713;
