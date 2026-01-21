'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11775<T> = T extends (infer U)[]
  ? DeepReadonlyArray11775<U>
  : T extends object
  ? DeepReadonlyObject11775<T>
  : T;

interface DeepReadonlyArray11775<T> extends ReadonlyArray<DeepReadonly11775<T>> {}

type DeepReadonlyObject11775<T> = {
  readonly [P in keyof T]: DeepReadonly11775<T[P]>;
};

type UnionToIntersection11775<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11775<T> = UnionToIntersection11775<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11775<T extends unknown[], V> = [...T, V];

type TuplifyUnion11775<T, L = LastOf11775<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11775<TuplifyUnion11775<Exclude<T, L>>, L>;

type DeepPartial11775<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11775<T[P]> }
  : T;

type Paths11775<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11775<K, Paths11775<T[K], Prev11775[D]>> : never }[keyof T]
  : never;

type Prev11775 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11775<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11775 {
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

type ConfigPaths11775 = Paths11775<NestedConfig11775>;

interface HeavyProps11775 {
  config: DeepPartial11775<NestedConfig11775>;
  path?: ConfigPaths11775;
}

const HeavyComponent11775 = memo(function HeavyComponent11775({ config }: HeavyProps11775) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11775) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11775 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11775: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11775.displayName = 'HeavyComponent11775';
export default HeavyComponent11775;
