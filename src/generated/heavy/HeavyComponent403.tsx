'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly403<T> = T extends (infer U)[]
  ? DeepReadonlyArray403<U>
  : T extends object
  ? DeepReadonlyObject403<T>
  : T;

interface DeepReadonlyArray403<T> extends ReadonlyArray<DeepReadonly403<T>> {}

type DeepReadonlyObject403<T> = {
  readonly [P in keyof T]: DeepReadonly403<T[P]>;
};

type UnionToIntersection403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf403<T> = UnionToIntersection403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push403<T extends unknown[], V> = [...T, V];

type TuplifyUnion403<T, L = LastOf403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push403<TuplifyUnion403<Exclude<T, L>>, L>;

type DeepPartial403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial403<T[P]> }
  : T;

type Paths403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join403<K, Paths403<T[K], Prev403[D]>> : never }[keyof T]
  : never;

type Prev403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig403 {
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

type ConfigPaths403 = Paths403<NestedConfig403>;

interface HeavyProps403 {
  config: DeepPartial403<NestedConfig403>;
  path?: ConfigPaths403;
}

const HeavyComponent403 = memo(function HeavyComponent403({ config }: HeavyProps403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent403.displayName = 'HeavyComponent403';
export default HeavyComponent403;
