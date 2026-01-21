'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11881<T> = T extends (infer U)[]
  ? DeepReadonlyArray11881<U>
  : T extends object
  ? DeepReadonlyObject11881<T>
  : T;

interface DeepReadonlyArray11881<T> extends ReadonlyArray<DeepReadonly11881<T>> {}

type DeepReadonlyObject11881<T> = {
  readonly [P in keyof T]: DeepReadonly11881<T[P]>;
};

type UnionToIntersection11881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11881<T> = UnionToIntersection11881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11881<T extends unknown[], V> = [...T, V];

type TuplifyUnion11881<T, L = LastOf11881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11881<TuplifyUnion11881<Exclude<T, L>>, L>;

type DeepPartial11881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11881<T[P]> }
  : T;

type Paths11881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11881<K, Paths11881<T[K], Prev11881[D]>> : never }[keyof T]
  : never;

type Prev11881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11881 {
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

type ConfigPaths11881 = Paths11881<NestedConfig11881>;

interface HeavyProps11881 {
  config: DeepPartial11881<NestedConfig11881>;
  path?: ConfigPaths11881;
}

const HeavyComponent11881 = memo(function HeavyComponent11881({ config }: HeavyProps11881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11881.displayName = 'HeavyComponent11881';
export default HeavyComponent11881;
