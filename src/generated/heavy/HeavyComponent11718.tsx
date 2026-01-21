'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11718<T> = T extends (infer U)[]
  ? DeepReadonlyArray11718<U>
  : T extends object
  ? DeepReadonlyObject11718<T>
  : T;

interface DeepReadonlyArray11718<T> extends ReadonlyArray<DeepReadonly11718<T>> {}

type DeepReadonlyObject11718<T> = {
  readonly [P in keyof T]: DeepReadonly11718<T[P]>;
};

type UnionToIntersection11718<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11718<T> = UnionToIntersection11718<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11718<T extends unknown[], V> = [...T, V];

type TuplifyUnion11718<T, L = LastOf11718<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11718<TuplifyUnion11718<Exclude<T, L>>, L>;

type DeepPartial11718<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11718<T[P]> }
  : T;

type Paths11718<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11718<K, Paths11718<T[K], Prev11718[D]>> : never }[keyof T]
  : never;

type Prev11718 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11718<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11718 {
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

type ConfigPaths11718 = Paths11718<NestedConfig11718>;

interface HeavyProps11718 {
  config: DeepPartial11718<NestedConfig11718>;
  path?: ConfigPaths11718;
}

const HeavyComponent11718 = memo(function HeavyComponent11718({ config }: HeavyProps11718) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11718) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11718 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11718: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11718.displayName = 'HeavyComponent11718';
export default HeavyComponent11718;
