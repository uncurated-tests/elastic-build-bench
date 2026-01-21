'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11073<T> = T extends (infer U)[]
  ? DeepReadonlyArray11073<U>
  : T extends object
  ? DeepReadonlyObject11073<T>
  : T;

interface DeepReadonlyArray11073<T> extends ReadonlyArray<DeepReadonly11073<T>> {}

type DeepReadonlyObject11073<T> = {
  readonly [P in keyof T]: DeepReadonly11073<T[P]>;
};

type UnionToIntersection11073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11073<T> = UnionToIntersection11073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11073<T extends unknown[], V> = [...T, V];

type TuplifyUnion11073<T, L = LastOf11073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11073<TuplifyUnion11073<Exclude<T, L>>, L>;

type DeepPartial11073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11073<T[P]> }
  : T;

type Paths11073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11073<K, Paths11073<T[K], Prev11073[D]>> : never }[keyof T]
  : never;

type Prev11073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11073 {
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

type ConfigPaths11073 = Paths11073<NestedConfig11073>;

interface HeavyProps11073 {
  config: DeepPartial11073<NestedConfig11073>;
  path?: ConfigPaths11073;
}

const HeavyComponent11073 = memo(function HeavyComponent11073({ config }: HeavyProps11073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11073.displayName = 'HeavyComponent11073';
export default HeavyComponent11073;
