'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11629<T> = T extends (infer U)[]
  ? DeepReadonlyArray11629<U>
  : T extends object
  ? DeepReadonlyObject11629<T>
  : T;

interface DeepReadonlyArray11629<T> extends ReadonlyArray<DeepReadonly11629<T>> {}

type DeepReadonlyObject11629<T> = {
  readonly [P in keyof T]: DeepReadonly11629<T[P]>;
};

type UnionToIntersection11629<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11629<T> = UnionToIntersection11629<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11629<T extends unknown[], V> = [...T, V];

type TuplifyUnion11629<T, L = LastOf11629<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11629<TuplifyUnion11629<Exclude<T, L>>, L>;

type DeepPartial11629<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11629<T[P]> }
  : T;

type Paths11629<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11629<K, Paths11629<T[K], Prev11629[D]>> : never }[keyof T]
  : never;

type Prev11629 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11629<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11629 {
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

type ConfigPaths11629 = Paths11629<NestedConfig11629>;

interface HeavyProps11629 {
  config: DeepPartial11629<NestedConfig11629>;
  path?: ConfigPaths11629;
}

const HeavyComponent11629 = memo(function HeavyComponent11629({ config }: HeavyProps11629) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11629) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11629 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11629: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11629.displayName = 'HeavyComponent11629';
export default HeavyComponent11629;
