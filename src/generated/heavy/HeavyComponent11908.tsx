'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11908<T> = T extends (infer U)[]
  ? DeepReadonlyArray11908<U>
  : T extends object
  ? DeepReadonlyObject11908<T>
  : T;

interface DeepReadonlyArray11908<T> extends ReadonlyArray<DeepReadonly11908<T>> {}

type DeepReadonlyObject11908<T> = {
  readonly [P in keyof T]: DeepReadonly11908<T[P]>;
};

type UnionToIntersection11908<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11908<T> = UnionToIntersection11908<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11908<T extends unknown[], V> = [...T, V];

type TuplifyUnion11908<T, L = LastOf11908<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11908<TuplifyUnion11908<Exclude<T, L>>, L>;

type DeepPartial11908<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11908<T[P]> }
  : T;

type Paths11908<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11908<K, Paths11908<T[K], Prev11908[D]>> : never }[keyof T]
  : never;

type Prev11908 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11908<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11908 {
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

type ConfigPaths11908 = Paths11908<NestedConfig11908>;

interface HeavyProps11908 {
  config: DeepPartial11908<NestedConfig11908>;
  path?: ConfigPaths11908;
}

const HeavyComponent11908 = memo(function HeavyComponent11908({ config }: HeavyProps11908) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11908) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11908 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11908: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11908.displayName = 'HeavyComponent11908';
export default HeavyComponent11908;
