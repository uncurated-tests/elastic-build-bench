'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11384<T> = T extends (infer U)[]
  ? DeepReadonlyArray11384<U>
  : T extends object
  ? DeepReadonlyObject11384<T>
  : T;

interface DeepReadonlyArray11384<T> extends ReadonlyArray<DeepReadonly11384<T>> {}

type DeepReadonlyObject11384<T> = {
  readonly [P in keyof T]: DeepReadonly11384<T[P]>;
};

type UnionToIntersection11384<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11384<T> = UnionToIntersection11384<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11384<T extends unknown[], V> = [...T, V];

type TuplifyUnion11384<T, L = LastOf11384<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11384<TuplifyUnion11384<Exclude<T, L>>, L>;

type DeepPartial11384<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11384<T[P]> }
  : T;

type Paths11384<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11384<K, Paths11384<T[K], Prev11384[D]>> : never }[keyof T]
  : never;

type Prev11384 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11384<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11384 {
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

type ConfigPaths11384 = Paths11384<NestedConfig11384>;

interface HeavyProps11384 {
  config: DeepPartial11384<NestedConfig11384>;
  path?: ConfigPaths11384;
}

const HeavyComponent11384 = memo(function HeavyComponent11384({ config }: HeavyProps11384) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11384) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11384 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11384: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11384.displayName = 'HeavyComponent11384';
export default HeavyComponent11384;
