'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11386<T> = T extends (infer U)[]
  ? DeepReadonlyArray11386<U>
  : T extends object
  ? DeepReadonlyObject11386<T>
  : T;

interface DeepReadonlyArray11386<T> extends ReadonlyArray<DeepReadonly11386<T>> {}

type DeepReadonlyObject11386<T> = {
  readonly [P in keyof T]: DeepReadonly11386<T[P]>;
};

type UnionToIntersection11386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11386<T> = UnionToIntersection11386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11386<T extends unknown[], V> = [...T, V];

type TuplifyUnion11386<T, L = LastOf11386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11386<TuplifyUnion11386<Exclude<T, L>>, L>;

type DeepPartial11386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11386<T[P]> }
  : T;

type Paths11386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11386<K, Paths11386<T[K], Prev11386[D]>> : never }[keyof T]
  : never;

type Prev11386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11386 {
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

type ConfigPaths11386 = Paths11386<NestedConfig11386>;

interface HeavyProps11386 {
  config: DeepPartial11386<NestedConfig11386>;
  path?: ConfigPaths11386;
}

const HeavyComponent11386 = memo(function HeavyComponent11386({ config }: HeavyProps11386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11386.displayName = 'HeavyComponent11386';
export default HeavyComponent11386;
