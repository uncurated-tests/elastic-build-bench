'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14975<T> = T extends (infer U)[]
  ? DeepReadonlyArray14975<U>
  : T extends object
  ? DeepReadonlyObject14975<T>
  : T;

interface DeepReadonlyArray14975<T> extends ReadonlyArray<DeepReadonly14975<T>> {}

type DeepReadonlyObject14975<T> = {
  readonly [P in keyof T]: DeepReadonly14975<T[P]>;
};

type UnionToIntersection14975<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14975<T> = UnionToIntersection14975<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14975<T extends unknown[], V> = [...T, V];

type TuplifyUnion14975<T, L = LastOf14975<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14975<TuplifyUnion14975<Exclude<T, L>>, L>;

type DeepPartial14975<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14975<T[P]> }
  : T;

type Paths14975<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14975<K, Paths14975<T[K], Prev14975[D]>> : never }[keyof T]
  : never;

type Prev14975 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14975<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14975 {
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

type ConfigPaths14975 = Paths14975<NestedConfig14975>;

interface HeavyProps14975 {
  config: DeepPartial14975<NestedConfig14975>;
  path?: ConfigPaths14975;
}

const HeavyComponent14975 = memo(function HeavyComponent14975({ config }: HeavyProps14975) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14975) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14975 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14975: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14975.displayName = 'HeavyComponent14975';
export default HeavyComponent14975;
