'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11665<T> = T extends (infer U)[]
  ? DeepReadonlyArray11665<U>
  : T extends object
  ? DeepReadonlyObject11665<T>
  : T;

interface DeepReadonlyArray11665<T> extends ReadonlyArray<DeepReadonly11665<T>> {}

type DeepReadonlyObject11665<T> = {
  readonly [P in keyof T]: DeepReadonly11665<T[P]>;
};

type UnionToIntersection11665<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11665<T> = UnionToIntersection11665<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11665<T extends unknown[], V> = [...T, V];

type TuplifyUnion11665<T, L = LastOf11665<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11665<TuplifyUnion11665<Exclude<T, L>>, L>;

type DeepPartial11665<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11665<T[P]> }
  : T;

type Paths11665<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11665<K, Paths11665<T[K], Prev11665[D]>> : never }[keyof T]
  : never;

type Prev11665 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11665<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11665 {
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

type ConfigPaths11665 = Paths11665<NestedConfig11665>;

interface HeavyProps11665 {
  config: DeepPartial11665<NestedConfig11665>;
  path?: ConfigPaths11665;
}

const HeavyComponent11665 = memo(function HeavyComponent11665({ config }: HeavyProps11665) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11665) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11665 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11665: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11665.displayName = 'HeavyComponent11665';
export default HeavyComponent11665;
