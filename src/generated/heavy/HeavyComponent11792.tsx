'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11792<T> = T extends (infer U)[]
  ? DeepReadonlyArray11792<U>
  : T extends object
  ? DeepReadonlyObject11792<T>
  : T;

interface DeepReadonlyArray11792<T> extends ReadonlyArray<DeepReadonly11792<T>> {}

type DeepReadonlyObject11792<T> = {
  readonly [P in keyof T]: DeepReadonly11792<T[P]>;
};

type UnionToIntersection11792<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11792<T> = UnionToIntersection11792<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11792<T extends unknown[], V> = [...T, V];

type TuplifyUnion11792<T, L = LastOf11792<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11792<TuplifyUnion11792<Exclude<T, L>>, L>;

type DeepPartial11792<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11792<T[P]> }
  : T;

type Paths11792<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11792<K, Paths11792<T[K], Prev11792[D]>> : never }[keyof T]
  : never;

type Prev11792 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11792<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11792 {
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

type ConfigPaths11792 = Paths11792<NestedConfig11792>;

interface HeavyProps11792 {
  config: DeepPartial11792<NestedConfig11792>;
  path?: ConfigPaths11792;
}

const HeavyComponent11792 = memo(function HeavyComponent11792({ config }: HeavyProps11792) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11792) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11792 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11792: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11792.displayName = 'HeavyComponent11792';
export default HeavyComponent11792;
