'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11006<T> = T extends (infer U)[]
  ? DeepReadonlyArray11006<U>
  : T extends object
  ? DeepReadonlyObject11006<T>
  : T;

interface DeepReadonlyArray11006<T> extends ReadonlyArray<DeepReadonly11006<T>> {}

type DeepReadonlyObject11006<T> = {
  readonly [P in keyof T]: DeepReadonly11006<T[P]>;
};

type UnionToIntersection11006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11006<T> = UnionToIntersection11006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11006<T extends unknown[], V> = [...T, V];

type TuplifyUnion11006<T, L = LastOf11006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11006<TuplifyUnion11006<Exclude<T, L>>, L>;

type DeepPartial11006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11006<T[P]> }
  : T;

type Paths11006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11006<K, Paths11006<T[K], Prev11006[D]>> : never }[keyof T]
  : never;

type Prev11006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11006 {
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

type ConfigPaths11006 = Paths11006<NestedConfig11006>;

interface HeavyProps11006 {
  config: DeepPartial11006<NestedConfig11006>;
  path?: ConfigPaths11006;
}

const HeavyComponent11006 = memo(function HeavyComponent11006({ config }: HeavyProps11006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11006.displayName = 'HeavyComponent11006';
export default HeavyComponent11006;
