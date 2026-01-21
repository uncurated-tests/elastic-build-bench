'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11618<T> = T extends (infer U)[]
  ? DeepReadonlyArray11618<U>
  : T extends object
  ? DeepReadonlyObject11618<T>
  : T;

interface DeepReadonlyArray11618<T> extends ReadonlyArray<DeepReadonly11618<T>> {}

type DeepReadonlyObject11618<T> = {
  readonly [P in keyof T]: DeepReadonly11618<T[P]>;
};

type UnionToIntersection11618<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11618<T> = UnionToIntersection11618<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11618<T extends unknown[], V> = [...T, V];

type TuplifyUnion11618<T, L = LastOf11618<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11618<TuplifyUnion11618<Exclude<T, L>>, L>;

type DeepPartial11618<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11618<T[P]> }
  : T;

type Paths11618<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11618<K, Paths11618<T[K], Prev11618[D]>> : never }[keyof T]
  : never;

type Prev11618 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11618<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11618 {
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

type ConfigPaths11618 = Paths11618<NestedConfig11618>;

interface HeavyProps11618 {
  config: DeepPartial11618<NestedConfig11618>;
  path?: ConfigPaths11618;
}

const HeavyComponent11618 = memo(function HeavyComponent11618({ config }: HeavyProps11618) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11618) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11618 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11618: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11618.displayName = 'HeavyComponent11618';
export default HeavyComponent11618;
