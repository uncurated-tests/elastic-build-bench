'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11506<T> = T extends (infer U)[]
  ? DeepReadonlyArray11506<U>
  : T extends object
  ? DeepReadonlyObject11506<T>
  : T;

interface DeepReadonlyArray11506<T> extends ReadonlyArray<DeepReadonly11506<T>> {}

type DeepReadonlyObject11506<T> = {
  readonly [P in keyof T]: DeepReadonly11506<T[P]>;
};

type UnionToIntersection11506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11506<T> = UnionToIntersection11506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11506<T extends unknown[], V> = [...T, V];

type TuplifyUnion11506<T, L = LastOf11506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11506<TuplifyUnion11506<Exclude<T, L>>, L>;

type DeepPartial11506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11506<T[P]> }
  : T;

type Paths11506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11506<K, Paths11506<T[K], Prev11506[D]>> : never }[keyof T]
  : never;

type Prev11506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11506 {
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

type ConfigPaths11506 = Paths11506<NestedConfig11506>;

interface HeavyProps11506 {
  config: DeepPartial11506<NestedConfig11506>;
  path?: ConfigPaths11506;
}

const HeavyComponent11506 = memo(function HeavyComponent11506({ config }: HeavyProps11506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11506.displayName = 'HeavyComponent11506';
export default HeavyComponent11506;
