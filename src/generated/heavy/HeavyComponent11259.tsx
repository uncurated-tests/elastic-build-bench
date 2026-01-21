'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11259<T> = T extends (infer U)[]
  ? DeepReadonlyArray11259<U>
  : T extends object
  ? DeepReadonlyObject11259<T>
  : T;

interface DeepReadonlyArray11259<T> extends ReadonlyArray<DeepReadonly11259<T>> {}

type DeepReadonlyObject11259<T> = {
  readonly [P in keyof T]: DeepReadonly11259<T[P]>;
};

type UnionToIntersection11259<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11259<T> = UnionToIntersection11259<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11259<T extends unknown[], V> = [...T, V];

type TuplifyUnion11259<T, L = LastOf11259<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11259<TuplifyUnion11259<Exclude<T, L>>, L>;

type DeepPartial11259<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11259<T[P]> }
  : T;

type Paths11259<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11259<K, Paths11259<T[K], Prev11259[D]>> : never }[keyof T]
  : never;

type Prev11259 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11259<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11259 {
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

type ConfigPaths11259 = Paths11259<NestedConfig11259>;

interface HeavyProps11259 {
  config: DeepPartial11259<NestedConfig11259>;
  path?: ConfigPaths11259;
}

const HeavyComponent11259 = memo(function HeavyComponent11259({ config }: HeavyProps11259) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11259) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11259 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11259: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11259.displayName = 'HeavyComponent11259';
export default HeavyComponent11259;
