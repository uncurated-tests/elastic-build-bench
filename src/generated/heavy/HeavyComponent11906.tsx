'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11906<T> = T extends (infer U)[]
  ? DeepReadonlyArray11906<U>
  : T extends object
  ? DeepReadonlyObject11906<T>
  : T;

interface DeepReadonlyArray11906<T> extends ReadonlyArray<DeepReadonly11906<T>> {}

type DeepReadonlyObject11906<T> = {
  readonly [P in keyof T]: DeepReadonly11906<T[P]>;
};

type UnionToIntersection11906<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11906<T> = UnionToIntersection11906<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11906<T extends unknown[], V> = [...T, V];

type TuplifyUnion11906<T, L = LastOf11906<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11906<TuplifyUnion11906<Exclude<T, L>>, L>;

type DeepPartial11906<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11906<T[P]> }
  : T;

type Paths11906<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11906<K, Paths11906<T[K], Prev11906[D]>> : never }[keyof T]
  : never;

type Prev11906 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11906<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11906 {
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

type ConfigPaths11906 = Paths11906<NestedConfig11906>;

interface HeavyProps11906 {
  config: DeepPartial11906<NestedConfig11906>;
  path?: ConfigPaths11906;
}

const HeavyComponent11906 = memo(function HeavyComponent11906({ config }: HeavyProps11906) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11906) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11906 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11906: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11906.displayName = 'HeavyComponent11906';
export default HeavyComponent11906;
