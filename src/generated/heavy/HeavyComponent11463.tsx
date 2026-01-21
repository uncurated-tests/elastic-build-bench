'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11463<T> = T extends (infer U)[]
  ? DeepReadonlyArray11463<U>
  : T extends object
  ? DeepReadonlyObject11463<T>
  : T;

interface DeepReadonlyArray11463<T> extends ReadonlyArray<DeepReadonly11463<T>> {}

type DeepReadonlyObject11463<T> = {
  readonly [P in keyof T]: DeepReadonly11463<T[P]>;
};

type UnionToIntersection11463<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11463<T> = UnionToIntersection11463<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11463<T extends unknown[], V> = [...T, V];

type TuplifyUnion11463<T, L = LastOf11463<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11463<TuplifyUnion11463<Exclude<T, L>>, L>;

type DeepPartial11463<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11463<T[P]> }
  : T;

type Paths11463<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11463<K, Paths11463<T[K], Prev11463[D]>> : never }[keyof T]
  : never;

type Prev11463 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11463<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11463 {
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

type ConfigPaths11463 = Paths11463<NestedConfig11463>;

interface HeavyProps11463 {
  config: DeepPartial11463<NestedConfig11463>;
  path?: ConfigPaths11463;
}

const HeavyComponent11463 = memo(function HeavyComponent11463({ config }: HeavyProps11463) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11463) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11463 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11463: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11463.displayName = 'HeavyComponent11463';
export default HeavyComponent11463;
